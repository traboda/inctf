import React, { useState } from 'react';
import styled from '@emotion/styled';

const TagSelectorContainer = styled.div`
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .tag {
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 7px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      margin: 0.25rem;
      transition: all 300ms ease;
      font-size: 16px !important;
      color: #F8FAFC;
      font-family: 'JetBrains Mono', monospace;
      
      &.small {
        padding: 0.25rem 1rem;
      }

      &:hover:not(.active) {
        background: rgba(56, 189, 248, 0.15);
        border-color: rgba(56, 189, 248, 0.3);
        box-shadow: 0 0 15px rgba(56, 189, 248, 0.1);
      }

      &.active {
        background: #38BDF8;
        border-color: #38BDF8;
        color: #020617;
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
        
        &:hover {
          background: #7DD3FC;
          border-color: #7DD3FC;
        }
      }
    }
  }

  &.fullWidth .tag-container {
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;

    .tag {
      width: 100%;
      margin: 0;
      padding: 0.75rem 1rem;
      border-radius: 0;
    }
  }
`;

type ValueType = {
  value: string,
  label: string,
};

type TagSelectorProps = {
  value: ValueType[],
  onChange: (val: ValueType | ValueType[]) => void,
  small?: boolean,
  options: ValueType[],
  isClearable?: boolean,
  multiple?: boolean,
  fullWidth?: boolean
};

const TagSelector = (props: TagSelectorProps) => {
  const [tags, setTags] = useState<any[]>([]);

  const handleTagClick = (_tag: any) => {
    if (props.multiple) {
      if (tags.includes(_tag.value)) {
        const _tags = [...tags];
        const index = tags.indexOf(_tag.value);
        _tags.splice(index, index + 1);
        setTags(_tags);
        props.onChange(_tags);
      } else {
        const _tags = [...tags, _tag.value];
        setTags(_tags);
        props.onChange(_tags);
      }
    } else if (props.isClearable && !props.value && _tag.value === props.value) {
      props.onChange(props.options[0]);
      props.onChange(props.options[0]);
    } else {
      props.onChange(_tag);
      props.onChange(_tag);
    }
  };

  const generateClassName = ({ value: val }: any) => {
    let _class = props.small ? 'small' : '';
    if (!props.fullWidth) _class += ' shadow-sm';
    if (props.multiple && tags.includes(val)) _class += ' active';
    // @ts-ignore
    if (!props.multiple && props.value?.value === val) _class += ' active';
    return _class;
  };

  return (<TagSelectorContainer className={props.fullWidth ? 'fullWidth' : ''}>
    <div className={`tag-container ${props.fullWidth ? 'shadow-sm' : ''}`}>
      {props.options.map(opt =>
      (
        <div
          key={opt.value}
          className={`tag ${generateClassName(opt)}`}
          onClick={() => handleTagClick(opt)}
        >
          {opt.label}
        </div>
      ),
      )}
    </div>
  </TagSelectorContainer>);
};

export default TagSelector;