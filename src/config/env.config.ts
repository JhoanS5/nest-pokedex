export const EnvConfiguration = () => ({ // Estoy regresando un objeto con ({})
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3002,
    defaultLimit: +(process.env.DEFAULT_LIMIT || 7),
})

// Es lo mismo que esto:
const Env = () => {
    return {

    }
}
