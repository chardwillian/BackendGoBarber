interface IMailConfig {
    driver: 'ethereal' | 'ses';

    defaults: {
        from: {
            email: string;
            name: string;
        };
    };
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'seu@email.com', // email configurado lá no site da amazon no aws
            name: 'Chard',
        },
    },
} as IMailConfig;
