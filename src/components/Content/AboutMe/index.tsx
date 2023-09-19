import { ContentTitle } from "../Title"
import { faAddressCard } from "@fortawesome/free-regular-svg-icons"

const contentJa =
  `都内のITベンチャー企業で受託開発をしています。
元はフロントエンドを主軸に開発を行っていましたが、現在はバックエンドの開発も行っています。
プライベートでは積極的に色々な技術をキャッチアップしています。
将来はハイレベルなフルスタックエンジニアを目指しています。GitHubの草生やし活動に勤しんでいます。`

const contentEn =
  `Working at an IT venture company in Tokyo, I am primarily involved in contract development.
While I initially focused on frontend development, I am now also engaged in backend development.
In my personal time, I actively keep up with various technologies.
My future goal is to become a high - level full - stack engineer.
I am dedicated to contributing to my GitHub repositories to demonstrate my commitment.`

export const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <ContentTitle icon={faAddressCard} title={'About me'} />
        <div className="w-full px-4">
          <p className="w-full text-[1.8rem] leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{
            __html: contentEn
          }}>
          </p>
        </div>
      </div>
    </>
  )
}