const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais com mais usuários no mundo',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            family: getCSS('--font'),
            size: 30
        }
    },
    xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'nome das redes sociais',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}