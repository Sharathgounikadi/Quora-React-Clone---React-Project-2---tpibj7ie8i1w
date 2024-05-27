import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

export default function AddPost() {
	const [showCreatePost, setShowCreatePost] = useState(false);
	function showCreatePostModal() {
		setShowCreatePost(true);
	}
	return (
		<>
			<div
				role="tabpanel"
				className="w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed"
				data-value="post"
				data-projection-id="71"
				style={{ opacity: 1, position: 'relative', top: 'auto', left: 'auto', zIndex: 2 }}
			>
				{/* <div
					className="rounded-full text-background-primary flex items-center justify-center cursor-pointer shrink-0"
					style={{ width: '48px', height: '48px', fontSize: '24px' }}
				>
					?
				</div> */}
				<div className="text-lg font-semibold mx-auto text-center">
					Create Post
				</div>
				<form>
					<div className="relative w-full min-w-[200px]">
						<textarea
							rows="2"
							placeholder="Give a title..."
							className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 mt-1.5 border-blue-gray-200 focus:border-gray-900"
						/>
						<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content-[' '] after:block after:w-full after:absolute after:-bottom-0 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:!border-gray-900">
							{' '}
						</label>
					</div>
					<div className="relative w-full min-w-[200px]">
						<textarea
							rows="8"
							placeholder="Say something..."
							className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none disabled:cursor-not-allowed transition-all border-b placeholder-shown:border-blue-gray-200 text-sm pt-4 pb-1.5 mt-1.5 border-blue-gray-200 focus:border-gray-900"
						/>
						<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] after:content-[' '] after:block after:w-full after:absolute after:-bottom-0 left-0 after:border-b-2 after:scale-x-0 peer-focus:after:scale-x-100 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25] text-gray-500 peer-focus:text-gray-900 after:border-gray-500 peer-focus:after:!border-gray-900">
							{' '}
						</label>
					</div>
					<div className="flex gap-2 justify-between flex-col sm:flex-row">
						<div className="relative w-full min-w-[200px] h-10">
							<input
								type="file"
								multiple
								className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
								placeholder=" "
							/>
							<label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content-[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content-[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
								{' '}
							</label>
						</div>
						<button
							type="submit"
							disabled
							className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-blue-500 capitalize rounded-full"
						>
							Post
						</button>
					</div>
				</form>
			</div>
		</>
	);
}