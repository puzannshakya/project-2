import React, { ChangeEvent, useState } from "react";
import { AutoCompleteProps, Option } from "./AutoComplete.props";
import {
  Container,
  IconContainer,
  InputContainer,
  InputText,
  ItemContainer,
  ListContainer,
  ListWrapper,
  Error,
} from "./AutoComplete.style";
import { ArrowDown, ArrowUp } from "../SVG";
import Typography from "../Typography";

const AutoComplete = (props: AutoCompleteProps): JSX.Element => {
  const {
    name,
    value,
    options,
    option,
    setOption = () => null,
    placeholder,
    error,
    paddingRight,
    onChange = () => null,
  } = props;

  const [inputValue, setInputValue] = useState<string | undefined>(
    options.find((optionItem) => optionItem.value === option?.value || value)
      ?.label || ""
  );
  const [visibility, setVisibility] = useState<boolean>(false);

  const items = options
    .filter((option) =>
      option.label.toUpperCase().includes(inputValue?.toUpperCase() || "")
    )
    .map((option, index) => (
      <ItemContainer onClick={() => handleSelect(option)} key={index}>
        <Typography>{option.label}</Typography>
      </ItemContainer>
    ));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setVisibility(true);
    setInputValue(event.target.value);
    if (
      options.find(
        (option) =>
          option.label.toUpperCase() === event.target.value.toUpperCase()
      )
    ) {
      setOption(
        options.find(
          (option) =>
            option.label.toUpperCase() === event.target.value.toUpperCase()
        )
      );
    } else {
      setOption(undefined);
    }
    onChange({
      target: {
        type: "text",
        value:
          options.find((option) => option.label === event.target.value)
            ?.value || "",
        name: name,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleSelect = (option: Option) => {
    setVisibility(false);
    setInputValue(option.label);
    setOption(option);
    onChange({
      target: {
        type: "text",
        value: option.value,
        name: name,
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <Container>
      <InputContainer>
        <InputText
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleInput}
          onFocus={handleInput}
        />
        <IconContainer onClick={handleToggle}>
          {visibility ? <ArrowUp /> : <ArrowDown />}
        </IconContainer>
      </InputContainer>
      {visibility && 0 < items.length && (
        <ListContainer
          style={{ paddingRight: paddingRight ? "32px" : undefined }}
        >
          <ListWrapper>{items}</ListWrapper>
        </ListContainer>
      )}
      {error && (
        <Error variant="small" textColor="error">
          {error}
        </Error>
      )}
    </Container>
  );
};

export default React.memo(AutoComplete);
