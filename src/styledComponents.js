import styled from 'styled-components/native';

//Importing Dimensions
import {Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('window');

//function for responsive font-size
export const responsiveFontSize = percentage => {
  const fontSize = (percentage / 100) * Math.min(width, height);
  return Math.round(fontSize);
};

export const PageContainer = styled.SafeAreaView`
  width: ${width}px;
  height: ${height}px;
  background-color: #121f27;
`;
export const WhiteRoundedContainer = styled.View`
  width: 100%;
  height: 90%;
  background-color: white;
  border-radius: 34px;
  padding-vertical: 7%;
  padding-horizontal: 6%;
`;
export const Header = styled.View`
  width: 100%;
  height: 15%;
  padding-horizontal: 6%;
  padding-vertical: 4%;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`;
export const BackButton = styled.TouchableOpacity`
  width: 15%;
  aspect-ratio: 1;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(222, 232, 239, 0.1);
  border-width: 1px;
`;
export const PageContent = styled.View`
  width: 100%;
  height: 90%;
`;
export const SolidGreenButton = styled.TouchableOpacity`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 14px;
  background-color: rgba(38, 174, 96, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-weight: 700;
`;
export const OutlinedGreenButton = styled.TouchableOpacity`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 14px;
  border: 1px solid #26ae60ed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LineDivider = styled.View`
  width: 90%;
  height: 14%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HalfPart = styled.View`
  width: 40%;
  height: 3%;
  background-color: rgba(224, 224, 224, 1);
`;
export const LineDividerText_OR = styled.Text`
  color: rgba(130, 130, 130, 1);
  font-weight: 600;
`;

export const InformativeFooterText = styled.Text`
  color: rgba(38, 174, 96, 1);
  font-weight: 700;
  align-self: center;
`;

export const ScreenName = styled.Text`
  font-size: 25px;
  font-weight: 700;
  /* margin-bottom: 5%; */
`;

///Register login update

export const OptionsButton = styled.TouchableOpacity`
  width: 15%;
  aspect-ratio: 1;
  border-radius: 9px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  border-color: rgba(222, 232, 239, 0.1);
  border-width: 1px;
`;

export const HeaderTwoButtons = styled.View`
  width: 100%;
  height: 15%;
  padding-horizontal: 6%;
  padding-vertical: 4%;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  position: absolute;
  z-index: 9000;
  top: 20px;
  left: 0px;
  align-self: center;
`;
export const ScrollViewContainer = styled.KeyboardAvoidingView`
  width: 100%;
  height: 75%;
  /* border: 1px solid black; */
  /* background-color: red; */
`;

export const StyledScrollView = styled.ScrollView`
  width: 100%;
  padding-bottom: 20%;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
  /* border: 1px; */
`;
export const SplitContainer = styled.View`
  width: 46%;
  height: 100%;
  justify-content: space-between;
`;
export const Label = styled.Text`
  font-size: 13px;
  color: rgba(130, 130, 130, 1);
  font-weight: 600;
  text-transform: uppercase;
`;
export const TextInput_Styled = styled.TextInput`
  width: 100%;
  height: 65%;
  background-color: #f6f8fa;
  border-radius: 10px;
  border-color: #dee8ef;
  border-width: 1px;
  padding: 10px;
  font-size: 15px;
  color: rgba(18, 31, 39, 1);
`;
export const TextInputContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
