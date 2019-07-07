export class DateHelper {
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    static textoParaData(data) {
        return new Date();
    }
}
