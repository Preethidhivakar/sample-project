import { useState } from "react";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";

export function Counter() {
    const [like, setLike] = useState(10);
    const [dislike, setDislike] = useState(10);

    return (
        <div className="like-dislike-buttons">
            <IconButton onClick={() => setLike(like + 1)} color="error">
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>
            <IconButton onClick={() => setDislike(dislike - 1)} color="error">
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>
        </div>
    );
}
