import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP05 — 연결된 모든 프라이빗 주소 공간에서 겹치지 않는 사설 IP 주소 범위 적용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        VPC, 온프레미스 환경 또는 다른 클라우드 공급자 간에 IP 주소 범위 충돌이 없도록 합니다.
        적절한 IP 주소 관리는 성장과 네트워크 요구 사항 변화를 수용하기 위한 네트워크 인프라 확장을 용이하게 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        VPC, 온프레미스 환경 또는 다른 클라우드 공급자 간에 IP 주소 범위 충돌이 없습니다.
        적절한 IP 주소 관리를 통해 성장 및 네트워크 요구 사항 변화를 수용하기 위한 네트워크 인프라 확장이 용이해집니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>온프레미스, 기업 네트워크 또는 다른 클라우드 공급자와 동일한 IP 범위를 VPC에 사용</li>
        <li>워크로드 배포에 사용된 VPC의 IP 범위를 추적하지 않음</li>
        <li>스프레드시트와 같은 수동 IP 주소 관리 프로세스에 의존</li>
        <li>CIDR 블록을 과도하게 크거나 작게 설정하여 IP 주소 낭비 또는 워크로드에 충분하지 않은 주소 공간 발생</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크를 적극적으로 계획하면 상호 연결된 네트워크에서 동일한 IP 주소가 여러 번 사용되는 문제 방지</li>
        <li>다양한 애플리케이션을 사용하는 워크로드 부분에서 발생하는 라우팅 문제 방지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>현재 CIDR 소비 캡처(예: VPC 및 서브넷): 서비스 API 작업을 사용하여 현재 CIDR 소비 수집; Amazon VPC IP Address Manager를 사용하여 리소스 검색</li>
        <li>현재 서브넷 사용량 캡처: 서비스 API 작업을 사용하여 각 리전의 VPC별 서브넷 수집; Amazon VPC IP Address Manager를 사용하여 리소스 검색</li>
        <li>현재 사용량 기록</li>
        <li>겹치는 IP 범위 생성 여부 확인</li>
        <li>여유 용량 계산</li>
        <li>겹치는 IP 범위 식별: 새 주소 범위로 마이그레이션하거나, 겹치는 범위를 연결해야 하는 경우 프라이빗 NAT 게이트웨이 또는 AWS PrivateLink 사용 고려</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC IP Address Manager (IPAM)</li>
        <li>AWS PrivateLink</li>
        <li>프라이빗 NAT 게이트웨이</li>
        <li>Amazon VPC</li>
      </ul>
      <PageNav />
    </article>
  );
}
