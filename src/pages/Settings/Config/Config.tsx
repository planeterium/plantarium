import Roact from "@rbxts/roact";
import { pure } from "@rbxts/roact-hooked";

import Card from "components/Card";
import { CARD_MARGIN, CARD_WIDTH } from "constants";
import { Page } from "store/pages";
import { useTheme } from "hooks/use-theme";

function Config() {
	const style = useTheme((theme) => theme.config);

	return (
		<Card
			index={0}
			align="left"
			style={style}
			page={Page.Settings}
			size={new UDim2(0, CARD_WIDTH, 0, 184)}
			position={new UDim2(0, 0, 1, -416 - CARD_MARGIN)}
		/>
	);
}

export default pure(Config);