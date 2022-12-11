function Button(props: { buttonName: string, link: string, id: string }) {
    return (
        <div>
            <button
                // TODO: Handle button click
                className="rounded-full border-2 border-sky-800 bg-sky-600 text-lg p-4 m-5 text-white"
            >{props.buttonName}</button>
        </div>
    );
}

export default Button;
