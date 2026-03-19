import { useLocation, Link } from "react-router-dom";
import "../components/DocContent.css";

export default function PlaceholderPage({ title }) {
  const location = useLocation();

  return (
    <article className="doc-content">
      <h1>{title || location.pathname}</h1>
      <p>
        이 페이지는 준비 중입니다. 곧 내용이 추가될 예정입니다.
      </p>
      <div className="doc-note">
        <div className="doc-note-title">준비 중</div>
        <p>
          이 섹션에는 해당 주제에 대한 전체 한국어 문서가 포함될 예정입니다.
        </p>
      </div>
      <Link to="/">← 홈으로 돌아가기</Link>
    </article>
  );
}
