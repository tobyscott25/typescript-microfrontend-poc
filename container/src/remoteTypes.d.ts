///<reference types="react" />

declare module "microfrontend1/app" {
	import { ComponentType } from "react";

	interface MicrofrontendOneProps {
		onChange: (e: any) => void;
		// Other props...
	}

	const MicrofrontendOne: ComponentType<MicrofrontendOneProps>;

	export default MicrofrontendOne;
}

declare module "microfrontend2/app" {
	import { ComponentType } from "react";

	interface MicrofrontendTwoProps {
		onChange: (e: any) => void;
		// Other props...
	}

	const MicrofrontendTwo: ComponentType<MicrofrontendTwoProps>;

	export default MicrofrontendTwo;
}
