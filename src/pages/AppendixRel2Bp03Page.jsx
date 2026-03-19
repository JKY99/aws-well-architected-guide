import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP03 — 적절한 크기의 전용 연결 또는 VPN 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드의 대역폭 요구사항을 분석하여 적절한 연결 유형과 용량을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>충분한 대역폭과 적절한 비용의 연결 구성</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>과소/과대 프로비저닝된 연결</li>
        <li>미래 성장 미고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최적화된 성능과 비용</li>
        <li>확장 가능한 연결</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>현재/미래 대역폭 요구사항 분석</li>
        <li>Direct Connect 용량 계획</li>
        <li>VPN 성능 테스트</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Direct Connect</li>
        <li>AWS VPN</li>
        <li>AWS Transit Gateway</li>
      </ul>
      <PageNav />
    </article>
  );
}
