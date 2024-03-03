import React from "react";
import image from "../Assets/images/Capture.PNG";

function Message({ flag }) {
	return (
		<div className="w-full smallTex my-1 flex flex-col items-center justify-between">
			<div className="w-full">
				{flag === "recieved" ? (
					<div className="flex items-center justify-between">
						<span>Ley Roy</span>
						<span className="smallText">23 Jun 2:05 PM</span>
					</div>
				) : (
					<div className="flex items-center justify-between">
						<span className="smallText">23 Jun 2:05 PM</span>
						<span>Ley Roy</span>
					</div>
				)}

				{flag === "recieved" ? (
					<div className="flex px-3 gap-4 w-full">
						<img
							src={image}
							alt=""
							className="h-8 w-8 rounded-full"
						/>
						<div className="w-full text-sm flex items-center justify-start rounded-r px-3 bg-textcolor text-darkgray bg-opacity-80 rounded">
							<p>This is also new and a fist message as well</p>
						</div>
					</div>
				) : (
					<div className="flex gap-4 w-full">
						<div className="w-full text-sm text-white flex items-center justify-start rounded-l px-3 bg-bluecolor rounded">
							<p>This is also new and a fist message as well</p>
						</div>
						<img
							src={image}
							alt=""
							className="h-8 w-8 rounded-full"
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default Message;
