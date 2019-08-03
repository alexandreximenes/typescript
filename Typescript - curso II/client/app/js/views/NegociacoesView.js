class NegociacoesView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Volume</th>
                    </thead>
                    <tbody>
                        ${model.paraArray.map(n => {
            return `<tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>
                            `;
        }).join('')}
                    </tbody>
                </table>`;
    }
}
