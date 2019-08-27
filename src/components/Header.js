/**
 * @flow
 */

import React, { Fragment, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
import { string, bool, func } from 'prop-types';
import { IMAGES } from '../assets/images';
import Colors from '../utils/Colors';
import { Input } from './Input';

type Props = {
	withNavigation?: boolean,
	onPress: () => void,
	title: string,
	isSearching: boolean
};

function Header({ withNavigation, navigation, onPress, title, onSearch }: Props) {
	const [ isSearching, setSearching ] = useState(false);
	return (
		<Wrapper>
			{isSearching && (
				<SearchWrapper>
					<Input
						placeholder={'Search by any book...'}
						flex={1}
						top
						onChangeText={onSearch}
					/>
					<ButtonIcon
						onPress={() => {
							setSearching(false);
							onSearch('');
						}}
					>
						<MaterialIcons color={'white'} name={'close'} />
					</ButtonIcon>
				</SearchWrapper>
			)}
			{!isSearching && (
				<Fragment>
					<BackButtonWrapper>
						<Button
							onPress={withNavigation ? onPress : () => navigation.toggleDrawer()}
						>
							{withNavigation ? <Arrow /> : <Menu />}
						</Button>
						<View>
							<Text>{title}</Text>
						</View>
						<Button onPress={() => setSearching(true)}>
							<Search />
						</Button>
					</BackButtonWrapper>
					<Divider />
				</Fragment>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.View`
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	justify-content: center;
	background-color: ${Colors.primary};
`;

const BackButtonWrapper = styled.View`
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;
const Button = styled.TouchableOpacity``;

const Arrow = styled.Image.attrs({
	source: IMAGES.ARROW,
})``;

const Menu = styled.Image.attrs({
	source: IMAGES.MENU,
})``;

const Search = styled.Image.attrs({
	source: IMAGES.SEARCH,
})``;

const Text = styled.Text`
	font-weight: 500;
	font-size: 20;
`;

const SearchWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Divider = styled.View`
	border-width: 0.5;
	width: 35%;
	justify-content: center;
	border-color: #979797;
	align-self: center;
	margin-top: 15px;
`;

const ButtonIcon = styled.TouchableOpacity`
	background-color: #7f8c8d;
	padding: 6px;
	border-radius: 3px;
	margin-left: 2px;
`;

Header.proptypes = {
	withNavigation: bool,
	onPress: func.isRequired,
	title: string,
	isSearching: bool,
};

export default withNavigation(Header);
