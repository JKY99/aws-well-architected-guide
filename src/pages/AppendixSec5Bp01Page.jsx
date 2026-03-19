import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP01 — 네트워크 계층 생성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        워크로드의 네트워크를 퍼블릭, 프라이빗, 격리 계층으로 분리하여 각 계층의 접근 범위를
        명확히 정의합니다. 계층화되지 않은 네트워크는 한 구성요소가 침해되면 전체 네트워크로
        피해가 확산될 위험이 높습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        인터넷과 직접 통신하는 리소스는 퍼블릭 서브넷에, 내부 애플리케이션은 프라이빗 서브넷에,
        데이터베이스와 민감 데이터는 격리된 서브넷에 배치됩니다. 각 계층 간 통신은 명시적으로
        허용된 경우에만 가능합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 리소스를 동일한 서브넷에 배치하여 횡적 이동(lateral movement) 제한 불가</li>
        <li>데이터베이스를 퍼블릭 서브넷에 배치하여 인터넷에서 직접 접근 가능</li>
        <li>단일 AZ에만 서브넷을 구성하여 가용성 및 격리 효과 감소</li>
        <li>격리 서브넷에서 불필요한 인터넷 아웃바운드 경로(NAT Gateway 등) 허용</li>
        <li>VPC 내 모든 서브넷이 동일한 라우팅 테이블을 공유</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>침해 발생 시 피해 범위를 해당 계층으로 제한하여 확산 방지</li>
        <li>각 계층에 적합한 보안 제어를 적용하여 방어 심층화(Defense in Depth) 구현</li>
        <li>규정 준수 요건(PCI DSS의 카드 데이터 환경 분리 등)을 충족하는 아키텍처 제공</li>
        <li>네트워크 트래픽 흐름을 명확히 문서화하여 보안 검토 및 감사 용이</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>VPC를 설계할 때 퍼블릭(인터넷 직접 접근), 프라이빗(NAT를 통한 아웃바운드만), 격리(인터넷 접근 없음) 세 계층으로 서브넷을 구성합니다.</li>
        <li>ALB, NAT Gateway 등 인터넷 facing 리소스는 퍼블릭 서브넷에, EC2, ECS 등 애플리케이션 계층은 프라이빗 서브넷에 배치합니다.</li>
        <li>RDS, ElastiCache 등 데이터 계층은 격리 서브넷에 배치하고, 인터넷 경로를 완전히 차단합니다.</li>
        <li>각 AZ마다 동일한 계층 구조의 서브넷을 구성하여 고가용성을 확보합니다.</li>
        <li>AWS Transit Gateway를 사용하여 여러 VPC 간 계층화된 네트워크 연결을 관리합니다.</li>
        <li>VPC CIDR 블록을 계층별로 체계적으로 설계하여 향후 확장성을 확보합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC — 가상 프라이빗 클라우드 및 서브넷 관리</li>
        <li>AWS Transit Gateway — 다중 VPC 네트워크 허브 관리</li>
        <li>AWS PrivateLink — 서비스 간 프라이빗 연결</li>
        <li>VPC Flow Logs — 서브넷 간 트래픽 모니터링</li>
        <li>AWS Network Manager — 전체 네트워크 토폴로지 시각화</li>
      </ul>
      <PageNav />
    </article>
  );
}
