import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP01 — 취약점 관리 수행</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>
        컴퓨팅 리소스(EC2 인스턴스, 컨테이너, Lambda 함수 등)에 대한 정기적인 취약점 스캔을 수행하고,
        발견된 취약점을 신속하게 패치하는 체계를 마련합니다. 취약점 관리는 외부 공격자가 알려진 결함을
        이용하기 전에 선제적으로 방어할 수 있는 핵심 보안 통제입니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 컴퓨팅 리소스에 대해 지속적인 취약점 스캔이 자동으로 수행되고, 심각도에 따라 패치 우선순위가
        결정되며, SLA 내에 취약점이 remediation됩니다. 패치 적용 현황을 중앙에서 가시화하고 추적할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>취약점 스캔을 수동으로 불규칙하게 수행하거나 아예 수행하지 않음</li>
        <li>발견된 취약점에 대한 remediation 우선순위와 SLA가 없음</li>
        <li>OS 패치는 수행하지만 애플리케이션 종속성(라이브러리, 패키지)의 취약점은 무시함</li>
        <li>컨테이너 이미지나 AMI를 최초 빌드 후 업데이트하지 않고 장기간 사용함</li>
        <li>취약점 스캔 결과를 보안 팀만 보고 개발/운영 팀과 공유하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>알려진 CVE(공통 취약점 및 노출)를 악용한 공격 표면을 줄임</li>
        <li>컴플라이언스 요구 사항(PCI-DSS, SOC 2 등) 충족에 기여</li>
        <li>취약점을 조기에 발견하여 침해 사고 발생 가능성 및 비용 감소</li>
        <li>자동화된 스캔으로 보안 팀의 수동 작업 부담 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon Inspector를 활성화하여 EC2, ECR 컨테이너 이미지, Lambda 함수에 대한 지속적인 취약점 평가를 자동화합니다.</li>
        <li>AWS Systems Manager Patch Manager를 사용하여 패치 기준선을 정의하고 패치 그룹에 자동 패치를 적용합니다.</li>
        <li>ECR의 이미지 스캔 기능(기본 스캔 또는 고급 Inspector 스캔)을 활성화하여 푸시 시마다 컨테이너 이미지를 스캔합니다.</li>
        <li>심각도(Critical, High, Medium)별 패치 SLA를 정의하고, AWS Security Hub를 통해 미준수 리소스를 추적합니다.</li>
        <li>EC2 Image Builder 파이프라인에 Inspector 스캔을 통합하여 취약한 AMI가 배포되지 않도록 합니다.</li>
        <li>취약점 트렌드와 패치 준수율을 Amazon QuickSight 또는 Security Hub 대시보드로 시각화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Inspector — EC2, ECR, Lambda에 대한 자동화된 취약점 평가</li>
        <li>AWS Systems Manager Patch Manager — OS 및 애플리케이션 패치 자동화</li>
        <li>Amazon ECR — 컨테이너 이미지 스캔 및 관리</li>
        <li>AWS Security Hub — 취약점 결과 집계 및 규정 준수 추적</li>
        <li>EC2 Image Builder — 보안 강화된 AMI 자동 빌드 파이프라인</li>
      </ul>
      <PageNav />
    </article>
  );
}
