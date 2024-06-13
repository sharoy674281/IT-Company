import React from "react";

const Header = () => {
	return (
		<header className="flex flex-col items-center ml-4 mr-4 mt-4">
			<h1 className="text-white text-4xl font-semibold">Norwegian Based</h1>
			<span className="text-brownColor text-4xl font-semibold">IT-Company</span>
			<h2 className="text-brownShade text-sm mt-1 mb-2">
				Web Development, Marketing, Chat-bots
			</h2>
			<img src="/images/ai picture.jpg" className="h-auto w-52" alt="" />
			<p className="text-white mt-4 mb-4 text-sm font-[arial]">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
				voluptates reiciendis sed harum ut illo consequuntur deserunt. Nisi
				mollitia atque eos est corrupti minima voluptates vel iste
				inventore, nihil optio deserunt, autem illum, voluptatum magnam
				recusandae quisquam dicta tempore esse veniam sit ut illo expedita.
				Repudiandae debitis ipsa quos repellendus.
			</p>
			<button className="text-white font-semibold text-sm px-3 py-2 bg-brownColor rounded-sm border-[1px] border-brownShade">
				GET IN TOUCH
			</button>
		</header>
	);
};

export default Header;
