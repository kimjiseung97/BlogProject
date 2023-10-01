import React, { ChangeEvent, Dispatch, SetStateAction, forwardRef ,KeyboardEvent} from 'react'
import './style.css';


// interface : Input Box 컴포넌트 Properties
interface Props{
    label: string;
    type: 'text' | 'password';
    error: boolean;
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>
    icon?: string;
    onButtonClick?: () => void;

    message?: string;

    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const InputBox = forwardRef<HTMLInputElement,Props> ((props: Props,ref) =>{
    
    // state: properties 
    const {label,type,placeholder,error,value,icon,message} = props;
    const {setValue,onButtonClick,onKeyDown} = props;


    //event handler : input 값 변경 이벤트 처리 함수

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const{value} = event.target;
        setValue(value);
    }

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) =>{
        if(!onKeyDown) return;
        onKeyDown(event);
    }

    return (
        <div className='inputbox'>
            <div className='inputbox-label'>{label}</div>
            <div className={error? 'inputbox-container-error':'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                {onButtonClick!==undefined && (
                    <div className="icon-button">
                        {icon!==undefined&&(<div className={`icon ${icon}`}></div>)}
                        <div className="icon eye-light-off-icon"></div>
                    </div>
                )}
            </div>
            {message!==undefined&&(
                <div className="inputbox-message">{message}</div>
            )}
            <div className='inputbox-message'>{'비밀번호는 8자 이상 입력해주세요'}</div>
        </div>
    )
});

export default InputBox;