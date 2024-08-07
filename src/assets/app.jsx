import { useTheme } from "@teishi/bulma_theme";

function App() {
    const { primary, secondary } = UseTheme("state");
    return (
        <div className={`box m-4 p-4 has-background-${secondary}`}>
            <h1 className={`title has txt-${primary}`}>Hola como ta tu!</h1>
        </div>
    );
}