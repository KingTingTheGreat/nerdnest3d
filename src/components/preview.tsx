import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

export const Preview = ({ image }: { image: React.ReactElement }) => {
	return (
		<div className="relative w-full">
			<AspectRatio.Root className="relative rounded-2xl overflow-hidden" key="active" ratio={1 / 1}>
				{image}
			</AspectRatio.Root>
		</div>
	);
};
