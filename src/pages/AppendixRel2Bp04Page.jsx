import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp04Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP04 — 단일 장애 지점 방지</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>네트워크 경로상의 단일 장애 지점을 식별하고 중복성을 추가하여 내결함성을 확보합니다.</p>
      <h2>원하는 결과</h2>
      <p>어떤 단일 구성 요소 장애도 전체 서비스 중단으로 이어지지 않는 아키텍처</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 NAT 게이트웨이</li>
        <li>단일 인터넷 게이트웨이 경로</li>
        <li>중복 없는 VPN</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>고가용성</li>
        <li>장애 격리</li>
        <li>서비스 연속성</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AZ별 NAT 게이트웨이 구성</li>
        <li>다중 경로 라우팅</li>
        <li>Transit Gateway 활용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC</li>
        <li>AWS Transit Gateway</li>
        <li>Amazon Route 53</li>
      </ul>
      <PageNav />
    </article>
  );
}
