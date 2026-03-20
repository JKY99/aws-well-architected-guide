import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP05 — 컴퓨팅 보호 자동화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비준수 구성이 탐지되지 않고 지속되어 보안 위험이 증가합니다.</p>
      </div>
      <p>
        자동화된 시스템이 모든 컴퓨팅 리소스의 스캔 및 패치를 수행합니다. 자동화된 검증 검사를 통해 소프트웨어 이미지와 종속성이 신뢰할 수 있는 소스에서 오며 변조되지 않았음을 확인합니다. 비준수 리소스가 탐지되면 자동 수정이 시작됩니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>자동화된 시스템이 모든 컴퓨팅 리소스의 스캔 및 패치 수행</li>
        <li>소프트웨어 이미지와 종속성이 신뢰할 수 있는 소스에서 오며 변조되지 않았음을 자동으로 검증</li>
        <li>워크로드가 자동으로 최신 종속성 여부를 확인하고 AWS 컴퓨팅 환경에서 신뢰성을 확립하기 위해 서명됨</li>
        <li>비준수 리소스 탐지 시 자동 수정 시작</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>긴급 패치 또는 프로덕션 시스템 교체를 위한 솔루션 없이 불변 인프라 관행을 따름</li>
        <li>수동 재정의 메커니즘 없이 자동화로 잘못 구성된 리소스를 수정</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>컴퓨팅 리소스에 대한 비인가 접근 및 사용 위험 감소</li>
        <li>잘못된 구성이 프로덕션 환경에 도달하는 것을 방지</li>
        <li>잘못된 구성 발생 시 탐지 및 수정</li>
        <li>비인가 접근 및 사용 탐지로 대응 시간 단축</li>
        <li>보안 문제로 인한 전체 영향 범위 축소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Image Builder를 사용하여 CIS 벤치마크 또는 STIG 표준을 통합한 보안 AMI 생성을 자동화합니다.</li>
        <li>AWS Config와 AWS Security Hub CSPM을 사용하여 구성 관리를 자동화합니다.</li>
        <li>AWS Systems Manager Patch Manager를 사용하여 패치/교체를 자동화합니다.</li>
        <li>Amazon Inspector와 ECR 이미지 스캐닝을 사용하여 취약점 스캔을 자동화합니다.</li>
        <li>Amazon GuardDuty를 사용하여 악성코드 및 위협 탐지를 구현합니다.</li>
        <li>인프라 보안을 위한 AWS 파트너 솔루션을 고려합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Inspector — 취약점 스캐닝 자동화</li>
        <li>AWS Systems Manager Patch Manager — 패치 관리 자동화</li>
        <li>EC2 Image Builder — 보안 강화된 AMI 자동 빌드</li>
        <li>AWS Signer — 코드 서명 자동화</li>
        <li>AWS CodeArtifact — 아티팩트 저장소 관리</li>
        <li>Amazon ECR — 컨테이너 이미지 스캐닝</li>
        <li>AWS Security Hub CSPM — 클라우드 보안 태세 관리</li>
        <li>AWS Config — 구성 규정 준수 모니터링</li>
        <li>Amazon GuardDuty — 위협 탐지</li>
      </ul>
      <PageNav />
    </article>
  );
}
