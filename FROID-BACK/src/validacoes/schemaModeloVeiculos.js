const yup = require('yup');

const schemaCadastroModeloVeiculos = yup.object().shape({
    model: yup.string().required('O campo modelo é obrigatório.'),
    volumeTotal: yup.number().required('O campo VolumeTotal é obrigatório.'),
    connected: yup.number().required('O campo Conectado é obrigatório.'),
    softwareUpdates: yup.number().required('O campo Atualizção de Software é obrigatório.')
});

const schemaAtualizarModeloVeiculos = yup.object().shape({
    model: yup.string(),
    volumeTotal: yup.number(),
    connected: yup.number(),
    softwareUpdates: yup.number()
});



module.exports = {
    schemaCadastroModeloVeiculos,
    schemaAtualizarModeloVeiculos
};