import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP03 — IP 서브넷 할당이 확장 및 가용성을 고려하도록 보장</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        확장 가능한 IP 서브넷은 미래 성장을 수용하고 불필요한 낭비를 방지하는 데 도움이 됩니다.
        VPC IP 주소 범위가 향후 확장과 가용 영역별 서브넷 할당을 고려할 만큼 충분히 큰지 확인합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드 성장을 수용하고 확장 시 계속해서 가용성을 제공할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>미래 성장을 고려하지 않아 CIDR 블록이 너무 작아져 재구성이 필요하고 잠재적 다운타임 발생</li>
        <li>탄력적 로드 밸런서가 사용할 수 있는 IP 주소 수를 잘못 추정</li>
        <li>동일한 서브넷에 고트래픽 로드 밸런서 다수 배포</li>
        <li>IP 주소 소비를 모니터링하지 않고 자동화된 조정 메커니즘 사용</li>
        <li>미래 성장 예상을 훨씬 초과하는 지나치게 큰 CIDR 범위 정의(겹치는 주소 범위를 가진 다른 네트워크와의 피어링 어려움)</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 성장 수용 가능</li>
        <li>확장 시 지속적인 가용성 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>서비스 요구 사항, 지연 시간, 규정, 재해 복구(DR) 요구 사항을 기반으로 관련 AWS 계정 및 리전 선택</li>
        <li>리전 VPC 배포 요구 사항 파악</li>
        <li>VPC 크기 결정: 다중 VPC 연결 배포 여부, 규정 요구 사항에 따른 분리된 네트워킹 필요 여부 결정</li>
        <li>현재 및 미래 요구 사항을 수용할 적절한 크기의 CIDR 블록으로 VPC 생성</li>
        <li>성장 예측이 불확실한 경우 향후 재구성 가능성을 줄이기 위해 더 큰 CIDR 블록 선택 고려</li>
        <li>듀얼 스택 VPC의 일부로 서브넷에 IPv6 주소 지정 사용 고려</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC</li>
        <li>AWS Transit Gateway</li>
        <li>Amazon EC2</li>
        <li>Amazon EKS (Elastic Kubernetes Service)</li>
        <li>Elastic Load Balancing (클래식, 애플리케이션, 네트워크 로드 밸런서)</li>
      </ul>
      <PageNav />
    </article>
  );
}
