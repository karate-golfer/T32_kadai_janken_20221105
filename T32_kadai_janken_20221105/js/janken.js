function R_Click(p_janken_r) {

    let janken = ['グー','チョキ','パー'];
    let janken_r = Math.floor( Math.random() * 3);

    let p_janken = ['グー','チョキ','パー'];
        if(janken_r == p_janken_r){
            Result_end = "<br>むむ！引き分けか。まだまだ行くぞ！";
        } else if(p_janken_r == 0 && janken_r ==1){
            Result_end = "<br>おお！君の勝ちだ！素晴らしい情報を授けよう！ <br><iframe width='560' height='315' src='https://www.youtube.com/embed/g5DYzTHIojU' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        } else if(p_janken_r == 1 && janken_r ==2){
            Result_end = "<br>おお！君の勝ちだ！素晴らしい情報を授けよう！<br><iframe width='560' height='315' src='https://www.youtube.com/embed/Rs9zyooqQVM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        } else if(p_janken_r == 2 && janken_r ==0){
            Result_end = "<br>おお！君の勝ちだ！素晴らしい情報を授けよう！<br><iframe width='560' height='315' src='https://www.youtube.com/embed/v0u7FD1O5PE' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        } else if(p_janken_r == 1 && janken_r ==0){
            Result_end = "<br>ふん！お前の負けだ！覚悟しろ！ <br><iframe width='560' height='315' src='https://www.youtube.com/embed/SWlqwBKPiK0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        } else if(p_janken_r == 2 && janken_r ==1){
            Result_end = "<br>ふん！お前の負けだ！覚悟しろ！<br><iframe width='560' height='315' src='https://www.youtube.com/embed/SHW8uUGg6C0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        } else if(p_janken_r == 0 && janken_r ==2){
            Result_end = "<br>ふん！お前の負けだ！覚悟しろ！<br><iframe width='560' height='315' src='https://www.youtube.com/embed/O-rsrmlQrn8' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        // } else {
        //     Result_end = "<br>ふん！お前の負けだ！覚悟しろ！"
        // }
        }
        // document.getElementById("jankenpon").src="jan" + janken_r + ".png"
        document.getElementById("Rejan1").innerHTML = "あなたは" + p_janken[p_janken_r] + "を出しました";
        document.getElementById("Rejan2").innerHTML = "中谷軍曹は" + janken[janken_r] + Result_end;
    }

    

    
    


    // $(function () {
    //     var elements = [
    //         '<div class="mv_wrap"><div class="mv_img"><img src="imgパス01" alt=""/></div><div class="mv"><video id="bg-video" src="動画パス01" poster="" muted loop playsinline></video></div></div>',
    //         '<div class="mv_wrap"><div class="mv_img"><img src="imgパス02" alt=""/></div><div class="mv"><video id="bg-video" src="動画パス02" poster="" muted loop playsinline></video></div></div>',
    //         '<div class="mv_wrap"><div class="mv_img"><img src="imgパス03" alt=""/></div><div class="mv"><video id="bg-video" src="動画パス03" poster="" muted loop playsinline></video></div></div>'
    //     ];
    //     var randElm = elements[Math.floor(Math.random() * elements.length)];
    //     $('#random_content').html(randElm);
         
    //     var videoOn = document.getElementById('bg-video');
    //     videoOn.play();
    //     });


    
    
    //メッセージ部分
    var textbox;
    var msg_buff = '';
    textbox = document.getElementById('message_window')
    message();
function message(){
  var msg = '私が教育を担当する軍曹の中谷だ。\n諸君の弛んだ精神を叩き直し、いかなる困難にでも立ち向かえる立派な隊員に育てるのが私の役目。\n私とじゃんけんをして勝てば、自衛隊の最高機密情報を教えよう。\nただし、私に負けた場合は罰としてとびきり厳しいトレーニングを行なってもらう。\n覚悟は良いか？\n  さぁ、じゃんけんの開始だ！\b'
  msg_buff += msg;
    message_char();
}

function message_char(){
  var c = msg_buff.slice(0, 1)
  if (c == "\n") {
    c = '<br>';
  }
  if (c == "\b") {
    sleep(3000);
    textbox.innerHTML = "";
    msg_buff = '';
    message();
  }else{
    textbox.innerHTML += c;
    msg_buff = msg_buff.slice(1);
    setTimeout('message_char()', 100);
  }
}
function sleep(waitMsec) {
  var startMsec = new Date();
  while (new Date() - startMsec < waitMsec);
}
// メッセージ部分終了