import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
    flex: 1;
    background-Color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
    padding: 16px;
    gap: 8px;
`

export const Title = styled.Text`
    font-size: 24px;
    font-weight: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title};
`;

export const WrapperInput = styled.View`
    flex-Direction: row;
    align-Items: center;
    justify-Content: center;
    gap: 16px;
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 44px;
    border-Radius: 4px;
    background-color: #ffffff;
    padding: 0 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: #73f7ff;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`;


