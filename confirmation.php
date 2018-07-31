<?php

//HTML内容出力
echo "<html>";
echo "<head>";
echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=Shift_JIS\">";
echo "<title>Contact form</title>";
echo "</head>";
echo "<body>";

//文字コード設定
mb_language("English");
mb_internal_encoding("SHIFT-JIS");

//*環境設定*************************************
//件名
$subject = "お問い合わせ";
//管理人メールアドレス(宛先)
$to = "leejeong.jang@gmail.com";
//**********************************************

//**POSTデータ受け取り**************************
//差出人メールアドレス格納
$header = "From: ". $_POST["mail"];

//本文格納
$body = "■お名前：" . $_POST["name"] ."\n";
$body .= "■内容：" . $_POST["body"] ."\n";

//************************************************


if(mb_send_mail($to,$subject,$body,$header)){
   echo "メール送信成功しました。";
}else{
   echo "メール送信失敗しました。";
}

//HTML内容出力
echo "</body>";
echo "</html>";


?>
