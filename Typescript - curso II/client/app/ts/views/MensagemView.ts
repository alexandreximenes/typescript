import { View } from './View';

export class MensagemView extends View<string>{

    template(model: string): string{
        return `<p class="alert alert-success">${model}</p>`
    }

    update(model : string): void{
        this._element.removeClass("msg");
        this._element.html(this.template(model));
        setInterval(() => {
            this._element.addClass("msg");
        }, 4000);
    }
}
