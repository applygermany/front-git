import {io} from "@/static/socket.io.esm.min.js";
// import Vue from "vue";
export default function ({app, $axios, redirect, store}, inject) {
    // فراخوانی توکن از کوکی ها
    inject("socket", {
        startSocket() {
            var c = $axios
                .post("https://chat.applygermany.net/auth", {})
                .then(function (re) {
                    console.log(re, "first result");
                    var token = re.data.token; // توکن
                    var sign = re.data.sign; // امضا

                    //   کانکت شدن به سوکت

                    var options = {
                        transports: ["websocket", "polling"],
                        path: "/socket",
                        withCredentials: true,
                        auth: {sign: sign, token: token},
                    };
                    const socket = io("https://chat.applygermany.net", options);
                    window.socket = socket;

                    // چت ایدی به یوزر فرستاده می شود :

                    socket.on("user_chat_id", (data) => {
                        //   data : ایدی کاربر
                        window.myid = data;
                        console.log(data, "user chat id");
                        store.commit("chat/Clear_Notification");
                        store.commit("chat/Clear_ChatRoomId");
                        store.commit("chat/Set_userChatId", data);
                    });
                    // دریافت یک نوتیف جدید
                    socket.on("new_notification", (notif) => {
                        //   notif :
                        //       array:
                        //          title : هدر نوتیف
                        //          body :   متن نوتیف
                        //          timestamp :   timestamp
                        console.log(notif, "notif");
                        store.commit("chat/Set_NewNotification", notif);
                    });

                    //   دریافت اخرین نوتیف ها
                    socket.on("last_notification", (data) => {
                        //   data :
                        //       array:
                        //          title : هدر نوتیف
                        //          body :   متن نوتیف
                        //          timestamp :   timestamp
                        console.log(data, "last_notification");
                        store.commit("chat/Set_Notification", data);
                        data.forEach((item) => {
                            const test = item.arguments;
                            if (test != "" && item.title == "نظرسنجی") {
                                console.log(item, "item");
                                console.log(item.arguments, "item");
                                console.log(test, "test");
                                console.log(JSON.parse(test), "parse");
                            }
                        });
                    });

                    socket.on("remove_notification", (data) => {
                        data.forEach((item) => {
                            console.log(item, "remove_notification");

                            store.commit("chat/Remove_NewNotification", item.timestamp);
                        });
                    });

                    //   روم های که در حین کانکشن ایجاد می شوند  :

                    window.socket.on(
                        "new_room_" + window.myid,
                        (room_id, name, lastname, [], active) => {
                            // data : ایدی روم
                            // active (روم فعال یا غیر فال می باشد) : true or false
                            // firstname : نام کاربر مقابل
                            // lastname : نام کاربر مقابل
                            console.log(room_id, name, lastname, active, "new_room_");
                            store.commit("chat/Set_NewRoom", {
                                room_id,
                                name,
                                lastname,
                                active,
                            });

                            //   active = active == 0 ? "غیر فعال " : "";
                            //   var element_id =
                            //     "<div id='room_" +
                            //     data +
                            //     "'><i id='delete_" +
                            //     data +
                            //     "'class='fa fa-close'></i><button id='" +
                            //     data +
                            //     "'>chat room: " +
                            //     name +
                            //     "  " +
                            //     lastname +
                            //     "</button>  " +
                            //     active +
                            //     "<br>";
                            //   $("#rooms").append(element_id);
                        }
                    );

                    //   روم های که در حین کانکشن ایجاد می شوند  :
                    // دقیقا مثل رویداد بالا

                    window.socket.on("new_rooms", (data) => {
                        //   , name, lastname, by, active, user_id, last_message,last_type,last_time,unreads
                        console.log(data, "new_rooms");
                        store.commit("chat/Set_Rooms", data);

                        // var element_id =
                        //   "<button id='" +
                        //   data +
                        //   "'>chat room: " +
                        //   name +
                        //   "  " +
                        //   lastname +
                        //   " by " +
                        //   by[0] +
                        //   "  " +
                        //   by[1] +
                        //   " " +
                        //   active +
                        //   "</button><br>";
                        // $("#rooms").append(element_id);
                        // $("button[id='" + data + "']").click(() => {
                        //   change(data);
                        // });
                    });

                    socket.on("chat_room_id", (data) => {
                        //   , name, lastname, [], active, user_id, last_message,last_type,last_time,unreads
                        console.log(data, "chat_room_id");

                        data.forEach((item) => store.commit("chat/Set_ChatRoomId", item));

                        // data : room id
                        // active (روم فعال یا غیر فال می باشد) : true or false
                        // firstname : نام کاربر مقابل
                        // lastname : نام کاربر مقابل

                        // active = active == 0 ? "غیر فعال " : "";
                        // var element_id =
                        //   "<div id='room_" +
                        //   data +
                        //   "'><i id='delete_" +
                        //   data +
                        //   "'class='fa fa-close'></i><button id='" +
                        //   data +
                        //   "'>chat room: " +
                        //   name +
                        //   "  " +
                        //   lastname +
                        //   "</button>  " +
                        //   active +
                        //   "<br>";
                        // $("#rooms").append(element_id);

                        //   admin :

                        //   $("#delete_"+data).click(()=>{
                        //       socket.emit("sSIMqKlNOe9fX52ZxgPV",data);  admin section -->
                        //   });
                        //   $("#"+data).click(()=>{change(data);})
                    });

                    //  admin disable :

                    //   socket.on("admin_event",(msg,room_id)=>{
                    //      if (msg == "deactive_room"){
                    //         $("#room_"+room_id[0]).append("غیر فعال");
                    //      }
                    //   });

                    // این رویداد بعد از ارسال پیام اتفاق می افتد

                    window.socket.on("event_message", (is_success, error) => {
                        console.log(is_success, error, "event_message");
                        // success  : true or false  ایا ارسال پیام انجام شده است ؟
                        // data :
                        //    array :
                        //       from : از طرف کدوم ایدی
                        //       type : نوع پیام   ( text , audio , file )
                        //       timestamp : timestamp
                        //       msg : پیام
                        //       read : true or false ایا پیام خوانده شده است ؟
                        // if (success) {
                        //   data.forEach((result) => {
                        //     if (result["from"] == myid) {
                        //       result["from"] = "me";
                        //     }
                        //     if (result.type == "text") {
                        //       console.log(result, "send_private_message");
                        //       store.commit("chat/Set_Messages", result);
                        //       //   $("#last_message").append(
                        //       //     result["msg"] +
                        //       //       "  " +
                        //       //       turn_time(new Date(result["timestamp"])) +
                        //       //       "  from:" +
                        //       //       result["from"] +
                        //       //       "  read: " +
                        //       //       result["read"] +
                        //       //       "<br>"
                        //       //   );
                        //     }
                        //     if (result.type == "audio" || result.type == "file") {
                        //       var messages_id = result["msg"];
                        //       window.socket.emit(
                        //         "message_buffer",
                        //         result["msg"],
                        //         result.room_id,
                        //         myid,
                        //         [result, messages_id]
                        //       );
                        //     }
                        //   });
                        // }
                    });

                    // این رویداد وقتی اتفاق می افتد یعنی پیام جدید دریافت بشود

                    socket.on("send_private_message", (data) => {
                        console.log(data, "send_private_message_230");
                        // data :
                        //    array :
                        //       from : از طرف کدوم ایدی
                        //       type : نوع پیام   ( text , audio , file )
                        //       timestamp : timestamp
                        //       msg : پیام
                        //       read : true or false ایا پیام خوانده شده است ؟
                        data.forEach((result) => {
                            if (result["from"] == myid) {
                                result["from"] = "me";
                            }

                            store.commit("chat/Update_Unreads", result);
                            store.commit("chat/Set_Messages", result);
                            function copy(aObject) {
                                // Prevent undefined objects
                                // if (!aObject) return aObject;

                                let bObject = Array.isArray(aObject) ? [] : {};

                                let value;
                                for (const key in aObject) {

                                    // Prevent self-references to parent object
                                    // if (Object.is(aObject[key], aObject)) continue;

                                    value = aObject[key];

                                    bObject[key] = (typeof value === "object") ? copy(value) : value;
                                }

                                return bObject;
                            }

                            let chatRoomId = store.getters['chat/chatRoomId'];
                            chatRoomId.forEach(e => {
                                let tmp = copy(e);
                                if (tmp.id == result.room_id) {

                                    console.log('-------- -> ', tmp)
                                    console.log('-------- -> ', result)
                                    console.log('-------- ++++++++ ---- ')
                                    tmp.room_id = result.room_id;
                                    tmp.last_message = result.msg;
                                    tmp.last_type_message = result.type;
                                    tmp.last_timestamp_message = new Date();


                                    store.commit('chat/Update_LastMessage', tmp);
                                    // setTimeout(() => {
                                    //     store.commit('chat/Remove_LastMessage',tmp.room_id);
                                    // },250)

                                }
                            })
                            //   if (result.type == "text") {
                            //     // $("#last_message").append(
                            //     //   result["msg"] +
                            //     //     "  " +
                            //     //     turn_time(new Date(result["timestamp"])) +
                            //     //     "  from:" +
                            //     //     result["from"] +
                            //     //     "  read: " +
                            //     //     result["read"] +
                            //     //     "<br>"
                            //     // );
                            //   }
                            //   if (result.type == "audio" || result.type == "file") {
                            //     var messages_id = result["msg"];
                            //     // window.socket.emit(
                            //     //   "message_buffer",
                            //     //   result["msg"],
                            //     //   result.room_id,
                            //     //   myid,
                            //     //   [result]
                            //     // );
                            //   }
                        });
                    });

                    // این رویداد اخرین پیام های یک روم را دریافت میکند : اصولا برای بعد از ورود به یک روم هست

                    window.socket.on("last_message", (data) => {
                        console.log(data, "last_message");
                        // data :
                        //    array :
                        //       from : از طرف کدوم ایدی
                        //       type : نوع پیام   ( text , audio , file )
                        //       timestamp : timestamp
                        //       msg : پیام
                        //       read : true or false ایا پیام خوانده شده است ؟

                        store.commit("chat/Clear_Messages");
                        // $("#last_message").html("");
                        data.forEach((result) => {
                            if (result["from"] == myid) {
                                result["from"] = "me";
                            }

                            console.log(result, "send_private_message");
                            store.commit("chat/Set_Messages", result);
                            //   if (result.type == "text") {
                            //     console.log(result, "send_private_message");
                            //     store.commit("chat/Set_Messages", result);
                            //     // $("#last_message").append(
                            //     //   result["msg"] +
                            //     //     "  " +
                            //     //     turn_time(new Date(result["timestamp"])) +
                            //     //     "  from:" +
                            //     //     result["from"] +
                            //     //     "  read: " +
                            //     //     result["read"] +
                            //     //     "<i id=delete_" +
                            //     //     result.room_id +
                            //     //     "_" +
                            //     //     result.id +
                            //     //     " data-id='" +
                            //     //     result.id +
                            //     //     "' data-room='" +
                            //     //     result.room_id +
                            //     //     "' class='fa fa-close'></i><br>"
                            //     // );
                            //     // admin :

                            //     //   $("#delete_"+result.room_id+"_"+result.id).click(()=>{
                            //     //      socket.emit("5w8oFWiTadbYDGTvFJZc",$("#delete_"+result.room_id+"_"+result.id).data("room"),myid,$("#delete_"+result.room_id+"_"+result.id).data("id"));
                            //     //    }
                            //   } else if (result.type == "audio" || result.type == "file") {
                            //     var messages_id = result["msg"];

                            //     //   *****
                            //     // در مرحله اگر تایپ صدا یا فایل باشد از سرور دیتا فرخوانی می شود
                            //     // ورودی :
                            //     //      1 : ایدی دیتا
                            //     //      2 : ایدی روم
                            //     //      3 : ایدی کاربر فعلی
                            //     //      4 : پارامتر های که ارسال می شود و بدون تغییر بازگشت داده می شوند

                            //     // window.socket.emit(
                            //     //   "message_buffer",
                            //     //   result["msg"],
                            //     //   result.room_id,
                            //     //   myid,
                            //     //   [result]
                            //     // );
                            //   }
                        });
                    });

                    socket.on("message_buffer", (audio_data, format, argument) => {
                        // console.log(audio_data, format, argument, "message_buffer");
                        // audio_data : base64 دیتا
                        // format :
                        //      به سه نوع عکس , پی دی اف و ویس می باشد
                        // arguments :
                        //       دیتا های هستند که به سمت سرور از طریق فرستاده می شود و بدون تغییری بازگشت داده می شوند
                        var messages_id = argument[1];
                        var id = argument[2];
                        let messages = store.getters["chat/messages"]

                        // format = messages[messages_id].type;
                        console.log('message_id: #' + messages_id,' - ',format)
                        var result = argument[0];
                        if (format == "audio") {
                            // تبدیل به ویس

                            // audio_data = String(audio_data).split(",")[1];
                            console.log(result, audio_data, "message_buffer");
                            store.commit("chat/Set_image", {
                                id: id,
                                img: audio_data,
                                type: "image",
                            })
                            let message = document.getElementById('img_key_' + messages_id);
                            if (message) {
                                message.innerHTML =
                                    `
                                        <div class="fileContainer">
                                            <img id="my_img_${messages_id}" src="/file.svg"  alt=""/>
                                            <div class="fileInfo">
                                                <p class="fileName">
                                                    صوت
                                                </p>
                                                <p class="fileSize">
                                                    دانلود
                                                </p>
                                            </div>
                                        </div>
                                    `;
                            }
                            //   store.commit("chat/Set_Messages", result);
                            // $("#last_message").append(
                            //   "<i id='" +
                            //     messages_id +
                            //     "' class='fa fa-play'></i>" +
                            //     "  " +
                            //     turn_time(new Date(result["timestamp"])) +
                            //     "   form:" +
                            //     result["from"] +
                            //     "  read: " +
                            //     result["read"] +
                            //     "<br>"
                            // );
                            // $("#" + messages_id).click(() => {
                            //   playaudio(audio_data);
                            // });
                        } else if (format == "image") {
                            // تبدیل به عکس
                            // let a = document.createElement('a');
                            // a.setAttribute('download',Date.now()+'.png')
                            // a.setAttribute('href',audio_data)
                            // a.click();
                            store.commit("chat/Set_image", {
                                id: id,
                                img: audio_data,
                                type: "image",
                            })
                            let message = document.getElementById('img_key_' + messages_id);
                            if (message) {
                                message.innerHTML =
                                    `
                                        <div class="fileContainer">
                                            <img id="my_img_${messages_id}" src="${audio_data}" />
                                            <div class="fileInfo">
                                                <p class="fileName">
                                                    تصویر
                                                </p>
                                                <p class="fileSize">
                                                    نمایش
                                                </p>
                                            </div>
                                        </div>
                                    `;
                            }
                            // console.log(result, "send_private_message");
                            // store.commit("chat/Set_Messages", result);
                            // $("#last_message").append(
                            //   "<div id='" +
                            //     messages_id +
                            //     "' > " +
                            //     turn_time(new Date(result["timestamp"])) +
                            //     "  form:" +
                            //     result["from"] +
                            //     "  read: " +
                            //     result["read"] +
                            //     "</div><br>"
                            // );
                            // $("#" + messages_id).append(image);

                        } else {
                            store.commit("chat/Set_image", {
                                id: id,
                                img: audio_data,
                                type: "file",
                            })
                            let message = document.getElementById('img_key_' + messages_id);
                            if (message) {
                                message.innerHTML =
                                    `
                                        <div class="fileContainer">
                                            <img id="my_img_${messages_id}" src="/file.svg"  alt=""/>
                                                    <div class="fileInfo">
                                                <p class="fileName">
                                                    فایل
                                                </p>
                                                <p class="fileSize">
                                                    دانلود
                                                </p>
                                            </div>
                                        </div>
                                    `;
                            }

                        }
                    });

                    ////////////////////////////// bepa  ///////////////////////////////////////

                    // بعد از ارسال پیام برای تمام اعضای روم فعال می شود و اخرین پیام به همراه مشخصات رو ارائه میدهد
                    socket.on("new_message", (data) => {
                        // console.log(data, "new_message   new");
                        //
                        // store.commit("chat/Update_LastMessage", data);
                        //   data.forEach((value)=>{
                        //       // value :
                        //       //     last_message
                        //       //     last_type_message
                        //       //     last_timestamp_message
                        //       //     room_id
                        //       console.log(value.room_id, 'new_message   new');
                        //   });
                    });

                    // وقتی پیام با شکست مواجه میشود
                    socket.on("event_message", (is_success, error) => {
                        if (!is_success) {
                            // err:
                            //    invalid_size   برای فایل استفاده میوشد که از سایز ۴ مگ بیشتر هستند
                            //     یا
                            //    server_error  ارور های مرتبط با دیتابیس و سرور
                        }
                        console.log(is_success, error, "event_message   new");
                    });

                    // برای همه اعضا روم فرستاده می شود
                    // socket.on("send_private_message", (data) => {
                    //     data.forEach((result) => {
                    //         if (result["from"] == myid) {
                    //             result["from"] = "me";
                    //         }
                    //
                    //         console.log(result, "send_private_message");
                    //         store.commit("chat/Set_Messages", result);
                    //         store.commit("chat/Update_Unreads", result);
                    //         //   if (result.type == "text") {
                    //         //     // $("#last_message").append(
                    //         //     //   result["msg"] +
                    //         //     //     "  " +
                    //         //     //     turn_time(new Date(result["timestamp"])) +
                    //         //     //     "  from:" +
                    //         //     //     result["from"] +
                    //         //     //     "  read: " +
                    //         //     //     result["read"] +
                    //         //     //     "<br>"
                    //         //     // );
                    //         //   }
                    //         //   if (result.type == "audio" || result.type == "file") {
                    //         //     var messages_id = result["msg"];
                    //         //     // window.socket.emit(
                    //         //     //   "message_buffer",
                    //         //     //   result["msg"],
                    //         //     //   result.room_id,
                    //         //     //   myid,
                    //         //     //   [result]
                    //         //     // );
                    //         //   }
                    //     });
                    // });
                    socket.on("disconnect", (data) => {
                        console.log(data, "disconnect");
                    });
                });

            // از این دستور استفاده شده برای قطع کردن اتصال قبل از اینکه یوزر مرورگر یا تب را ببندد
            // سوکت قابل کش شدن داره و ممکنه مشکل ایجاد بشه اگر قبلش قطع نشه برای کاربر

            window.onbeforeunload = function (e) {
                socket.disconnect();
            };
        }
        ,

        sendMessage(room_id) {
            var msg = store.getters["chat/messageInput"];

            //   روی داد زیر صدا زده می شود برای ارسال پیام
            // ورودی  :
            //   ۱ : ایدی روم
            //   ۲ : ایدی کاربر فعلی
            //   ۳ : msg
            //   ۴ : فرمت پیام (text , file )
            console.log(room_id, msg);
            window.socket.emit("private_message", room_id, window.myid, msg, "text");
        }
        ,
        sendFile(room_id, file, type) {

            //   روی داد زیر صدا زده می شود برای ارسال پیام
            // ورودی  :
            //   ۱ : ایدی روم
            //   ۲ : ایدی کاربر فعلی
            // alert('send sfile')
            //   ۳ : msg
            //   ۴ : فرمت پیام (text , file )
            console.log(room_id, file);
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                var base64_encoded = reader.result;
                console.log('send file')

                window.socket.emit("private_message", room_id, window.myid, base64_encoded, "file");
            }
        }
        ,

        record(room_id) {
            // ورودی :
            //     room_id : ایدی روم

            room_id = String(room_id);
            var audio = {audio: 1, video: 0};
            navigator.mediaDevices.getUserMedia(audio).then((stream) => {
                var recordss = new MediaRecorder(stream);
                recordss.start();
                document.getElementById("records").innerText = "Stop Record";
                // $("#records").click(() => {
                //   record(room_id);
                // });
                var stop_func = () => {
                    recordss.stop();
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                    document.getElementById("records").innerText = "Record Voice";
                    document
                        .getElementById("records")
                        .removeEventListener("click", stop_func);
                    document
                        .getElementById("records")
                        .addEventListener("click", record(room_id));
                };
                document.getElementById("records").removeEventListener("click", record);
                document.getElementById("records").addEventListener("click", stop_func);
                var data = [];
                recordss.onstop = () => {
                    var blob = new Blob(data, {type: "audio/ogg; codec=opus"});
                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => {
                        var base64_encoded = reader.result;
                        //   ارسال فایل به سرور
                        //   رویداد زیر صدا زده می شود برای ارسال پیام

                        // ورودی  :
                        //   ۱ : ایدی روم
                        //   ۲ :‌ ایدی کاربر فعلی
                        //   ۳ : audio base64
                        //   ۴ : فرمت پیام (text , file  , audio)
                        window.socket.emit(
                            "private_message",
                            room_id,
                            window.myid,
                            base64_encoded,
                            "audio"
                        );
                    };
                };

                recordss.ondataavailable = (event) => {
                    data.push(event.data);
                };
            });
        }
        ,

        change(id) {
            // id : ایدی روم

            // رویداد زیر صدا زده می شود برای دریافت اخرین پیام ها
            //  ورودی  :
            //       id : ایدی روم
            //       myid : ایدی کاربر که قبلا دریافت شده است
            console.log(id, "last_message");
            window.socket.emit("last_message", id, window.myid);

            // $("#rooms").hide();
            // $("body").append(
            //   "<div id='last_message'></div> <input type='text' id='message'><input id='" +
            //     id +
            //     "' type='button' value='send message'/><button id='records'>Record Voice</button><input type='file' id='file_upload' accept='application/pdf, image/*'/>"
            // );

            // document.getElementById("file_upload").onchange = function (e) {
            //   var reader = new FileReader();
            //   reader.readAsDataURL(this.files[0]);
            //   reader.onload = () => {
            //     var file = reader.result;

            //     //   ارسال فایل به سرور
            //     //   روی داد زیر صدا زده می شود برای ارسال پیام
            //     // ورودی  :
            //     //   ۱ : ایدی روم
            //     //   ۲ : ایدی کاربر فعلی
            //     //   ۳ : file base64
            //     //   ۴ : فرمت پیام (text , file , audio)

            //     window.socket.emit(
            //       "private_message",
            //       id,
            //       window.myid,
            //       file,
            //       "file"
            //     );
            //   };
            // };

            // $("input[id='" + id + "']").click(() => {
            //   send_message(id);
            // });

            // //   تابع ضبط صدا :

            // $("#records").click(() => {
            //   record(id);
            // });
        }
        ,

        readNotification() {
            console.log(window.myid);
            window.socket.emit("read_notification", window.myid);
        },
    })
    ;
}
