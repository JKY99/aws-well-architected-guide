import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>PERF04-BP03 — 워크로드에 적합한 전용 연결 또는 VPN 선택</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 보통</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 보통입니다.</p>
      </div>
      <p>온프레미스 환경과 AWS 간의 연결이 필요한 경우 워크로드의 대역폭, 지연 시간, 보안, 가용성 요구사항에 맞는 연결 방식을 선택합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 요구사항에 최적화된 연결 방식을 선택하여 온프레미스와 클라우드 간 안정적이고 고성능의 연결을 제공합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고대역폭 워크로드에 인터넷 기반 VPN 사용</li>
        <li>연결 방식의 지연 시간 특성을 고려하지 않음</li>
        <li>비용만을 고려하여 성능이 부족한 연결 방식 선택</li>
        <li>단일 연결 경로로 가용성 위험 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>예측 가능하고 일관된 네트워크 성능 보장</li>
        <li>고대역폭 데이터 전송의 비용 최적화</li>
        <li>온프레미스와 클라우드 간 안전한 연결 확보</li>
        <li>연결 이중화로 가용성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>고대역폭 또는 낮은 지연 시간 요구 시 AWS Direct Connect 선택</li>
        <li>비용 효율적인 암호화 연결에 AWS Site-to-Site VPN 활용</li>
        <li>Direct Connect와 VPN을 함께 구성하여 이중화 확보</li>
        <li>AWS Transit Gateway로 여러 VPC와 온프레미스 연결 단순화</li>
        <li>연결 성능을 지속적으로 모니터링하여 SLA 준수 확인</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Direct Connect — 전용 네트워크 연결</li>
        <li>AWS Site-to-Site VPN — 암호화된 VPN 연결</li>
        <li>AWS Transit Gateway — 중앙 집중식 네트워크 허브</li>
        <li>AWS Direct Connect Gateway — 글로벌 Direct Connect 연결 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
