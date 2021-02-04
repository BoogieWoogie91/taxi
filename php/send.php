<?php
$to      = '70570508@mail.ru';
$subject = 'Обратный звонок';
    $message = '
                    Имя: '.$_POST['name'].'
                    Телефон: '.$_POST['phone'].'
             ';
  $headers .= "From: Отправитель <70570508@mail.ru>\r\n"; //Наименование и почта отправителя

mail($to, $subject, $message, $headers);
?>