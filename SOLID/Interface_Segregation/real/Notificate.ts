// Согласно ISP, общие для всех типов поля и методы разработчики хранят
// в общем интерфейсе Message:

interface Message {
    title: string;
    body: string;
    send(to: Array<string>): void
}

interface SmsMessage extends Message {
    smsService: SmsService;
}
interface PushMessage extends Message {
    pushService: PushService;
}
interface EmailMessage extends Message {
    emailService: EmailService;
}