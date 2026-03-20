import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SecInfraProtectionPage() {
  return (
    <article className="doc-content">
      <h1>보안 — 인프라 보호</h1>

      <p>
        인프라 보호는 모범 사례 및 조직/규제 의무를 충족하기 위해 필요한
        심층 방어(Defense in Depth)와 같은 제어 방법론을 포괄합니다.
        인프라 보호는 정보 보안 프로그램의 핵심 요소로,
        워크로드 내 시스템과 서비스가 의도하지 않은 무단 접근 및 잠재적 취약점으로부터
        보호되도록 보장합니다.
      </p>

      <h2>AWS 글로벌 인프라</h2>
      <ul>
        <li><strong>리전(Region):</strong> 지리적으로 분리된 데이터센터 집합</li>
        <li><strong>가용 영역(AZ):</strong> 독립적 전력·냉각·보안을 갖춘 물리적 분리 시설. AZ 간 거리는 최소 수 km, 최대 100km</li>
        <li><strong>AWS Local Zones:</strong> 저지연 애플리케이션 실행 지원 (EC2, VPC, EBS, ELB 등)</li>
        <li><strong>AWS Outposts:</strong> 온프레미스 시설에서 AWS 서비스 사용 가능한 하이브리드 환경</li>
      </ul>

      <h2>네트워크 보호 (Protecting networks)</h2>
      <p>Zero Trust 원칙을 적용하여 모든 계층에서 보안을 적용합니다.</p>
      <ul>
        <li><strong>SEC05-BP01:</strong> 네트워크 레이어 생성</li>
        <li><strong>SEC05-BP02:</strong> 네트워크 레이어 내 트래픽 흐름 제어</li>
        <li><strong>SEC05-BP03:</strong> 검사 기반 보호 구현</li>
        <li><strong>SEC05-BP04:</strong> 네트워크 보호 자동화</li>
      </ul>

      <h2>컴퓨팅 보호 (Protecting compute)</h2>
      <p>
        EC2, 컨테이너, Lambda, 데이터베이스 서비스, IoT 등 모든 컴퓨팅 리소스를 대상으로 합니다.
        공통 전략으로는 심층 방어, 취약점 관리, 공격 표면 축소, 구성 자동화가 있습니다.
      </p>
      <ul>
        <li><strong>SEC06-BP01:</strong> 취약점 관리 수행</li>
        <li><strong>SEC06-BP02:</strong> 강화된 이미지로 컴퓨팅 프로비저닝</li>
        <li><strong>SEC06-BP03:</strong> 수동 관리 및 인터랙티브 접근 최소화</li>
        <li><strong>SEC06-BP04:</strong> 소프트웨어 무결성 검증</li>
        <li><strong>SEC06-BP05:</strong> 컴퓨팅 보호 자동화</li>
      </ul>

      <PageNav />
    </article>
  );
}
