export const theme = {
    fonts: {
        Raleway300Light: "Raleway_300Light",
        Raleway400Regular: "Raleway_400Regular",
        Raleway500Medium: "Raleway_500Medium",
        Raleway600SemiBold: "Raleway_600SemiBold",
        Raleway700Bold: "Raleway_700Bold",
        Pacifico400Regular: "Pacifico_400Regular"
    },
    colors: {
        WpbColor: {
            Cta: "65,138,71",
            Error: "253, 114, 124",
            Info: "124, 153, 180",
            Neutral: {
                100: "255, 255, 255",
                99: "255, 255, 250",
            },
            Primary: {
                Light: "",
                Regular: "100, 94, 157",
                Medium: "58, 55, 90",
                Dark: "33, 31, 51",
            }
        }
    },
    opacities: {
        WpbOpacity: {
            40: 0.4
        }
    }
}

export function setColor(color: string, alpha = 1.0) {
    return `rgba(${color}, ${alpha})`
}