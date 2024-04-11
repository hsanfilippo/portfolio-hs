import * as S from './styles'

const StackWindow = () => {
    return (
        <>
          <S.WindowContainer>
            <S.WindowTab>
                <p>tech-stack</p>
                <div>
                  <ul>
                    <li>
                      <S.windowButton id='bYellow'></S.windowButton>
                    </li>
                    <li>
                      <S.windowButton id='bGreen'></S.windowButton>
                    </li>
                    <li>
                      <S.windowButton id='bRed'></S.windowButton>
                    </li>
                  </ul>
                </div>
            </S.WindowTab>
            <S.GridContainer>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://e7.pngegg.com/pngimages/780/934/png-clipart-html-logo-html5-logo-icons-logos-emojis-tech-companies-thumbnail.png" alt="dsadad" title='aaa'/>
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
              <S.Item>
                <img src="https://via.placeholder.com/80x80" alt="" />
              </S.Item>
            </S.GridContainer>
          </S.WindowContainer>
        </>
    )
}

export default StackWindow
