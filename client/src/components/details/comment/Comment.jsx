import formatDate from "../../../utils/formatDate";

import "./Comment.css";

export default function Comment(values) {
    return (
        <div className="comment color-orange mb-4">
        <main>
            <p><span>{values.owner.username}:</span> {values.content}</p>
        </main>
        <footer>
            <p className="date text-muted">{formatDate(values._createdOn)}</p>
        </footer>
    </div>
    )
}