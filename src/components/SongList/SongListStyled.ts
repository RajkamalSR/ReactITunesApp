import styled from "styled-components";

const SearchBox:any = styled.div`
display: flex;
padding: 0;
position: relative;
margin: 24px auto;
@media screen and (min-width: 1024px) {
      max-width: 50%;
  }
`;

const SearchInput:any = styled.input`
width: 100%;
border: 0;
background: transparent;
color: #fff;
border: 1px solid #ffffff47;
padding: 12px 28px;
border-radius: 52px;
margin: 0 1rem;
&:focus-visible {
    outline: 0;
  }
&::placeholder {
    opacity: 0.8;
    color: #fff;
  }
`;

const SearchIcon:any = styled.span`
font-size: 2rem;
`;

const SearchButton:any = styled.button`
background: transparent;
border: 0;
position: absolute;
color: #fff;
right: 14px;
top: 6px;
`;

const SearchForm:any = styled.form`
dislplay:block;
`;

const SongListWrapper:any = styled.div`
display: flex;
box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
justify-content: center;
align-items: center;
width: 100%;
box-sizing: border-box;
text-align: left;
padding-top: 8px;
padding-bottom: 8px;
padding-left: 16px;
padding-right: 16px;
`;

const ImgAvatar:any = styled.img`
width: 72px;
height: 72px;
border-radius: 50%;
`;

const AlbumList:any = styled.div`
display: flex;
flex-direction: column;
margin-left: 1rem;
width: 100%;
`;

const ArtistName:any = styled.h4`
max-width: calc(100% - 84px);
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
`;

const CollectionName:any = styled.p`
max-width: 94%;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
`;

const AudioControlsWrapper:any = styled.div`
margin-left: auto;
`;


const AudioButton:any = styled.div`
font-size: 3rem;
cursor: pointer;
`;

const AudioInput:any = styled.audio`
display:none
`;

export {SearchBox, SearchInput, SearchButton, SearchIcon, SearchForm, SongListWrapper, ImgAvatar, AlbumList, ArtistName, CollectionName, AudioControlsWrapper, AudioButton, AudioInput}