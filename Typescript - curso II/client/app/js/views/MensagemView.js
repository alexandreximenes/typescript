class MensagemView extends View {
    template(model) {
        return `<p class="alert alert-success">${model}</p>`;
    }
    update(model) {
        this._element.removeClass("msg");
        this._element.html(this.template(model));
        setInterval(() => {
            this._element.addClass("msg");
        }, 4000);
    }
}
