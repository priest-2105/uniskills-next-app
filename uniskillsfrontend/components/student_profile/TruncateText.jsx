import { useState, useEffect } from "react";
export default function TruncatedText({ text }) {
	const [maxWords, setMaxWords] = useState(18);
	const [htmlDocument, setHtmlDocument] = useState(null);

	const truncateText = () => {
		const words = text.split(" ");
		// return (
		// 	words.slice(0, limit).join(" ") +
		// 	(words.length > limit
		// 		? `... <span class="text-primary fs-bold" onclick={handleSeeMore}>See more</span>`
		// 		: "")
		// );

		if (words.length > maxWords) {
            const view  = words.slice(0, maxWords)

            setHtmlDocument(view.join(" ") + <SeeMore />)
		} else {
			setHtmlDocument(words.join(" "));
		}
	};


    const SeeMore = ()=>{
        return <span>...</span>
    }

	useEffect(() => {
		truncateText();
	}, [text, maxWords]);

	return <div dangerouslySetInnerHTML={{ __html: htmlDocument }}></div>;
}
