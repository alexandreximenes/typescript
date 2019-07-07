export class DateHelper{

    static dataParaTexto(data: Date): string{
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static textoParaData(data: string): Date{
        return new Date();
    }
}