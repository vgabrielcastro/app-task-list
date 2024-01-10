import styled from 'styled-components/native'

export const Wrapper = styled.View`
    flex-direction: row;
    margin-top: 12px;
    padding: 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.gray};
`;

export const Title = styled.Text`
    font-size: 16px;
    color: #fff;
    flex: 1;
`;

export const Button = styled.TouchableOpacity`
margin-right: 8px
`;