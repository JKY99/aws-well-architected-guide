import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL01-BP05 — 고정 제약 사항 수용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮습니다.</p>
      </div>
      <p>일부 서비스 한도는 AWS에서도 변경이 어렵거나 불가능한 고정 제약입니다. 이러한 제약을 인식하고 아키텍처를 그에 맞게 설계합니다.</p>
      <h2>원하는 결과</h2>
      <p>고정 한도 내에서 안정적으로 운영되는 아키텍처 설계</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고정 한도를 무시하고 설계</li>
        <li>한도 초과 시 대응 계획 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예기치 않은 한도 초과 장애 방지</li>
        <li>안정적인 운영</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>고정 한도 목록 파악 및 문서화</li>
        <li>한도에 맞는 아키텍처 설계</li>
        <li>여러 계정 분산으로 한도 우회</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Service Quotas</li>
        <li>AWS Organizations</li>
      </ul>
      <PageNav />
    </article>
  );
}
