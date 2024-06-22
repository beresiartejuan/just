import { useEffect } from "react"

export default function ChangeThemeButton() {

    useEffect(() => {
        const button = document.querySelector("button.change-mode")!;
        const body = document.querySelector("body")!;

        function changeTheme() {
            body.classList.toggle('dark-mode');
        }

        button.addEventListener("click", changeTheme);

        return () => {
            button.removeEventListener("click", changeTheme);
        }
    }, []);

    return (
        <div className="flex sticky top-0 left-0 right-0 flex-row justify-center py-5 bg-transparent">
            <button className="text-[2rem] px-5 rounded-md change-mode">🍁</button>
        </div>
    )
}