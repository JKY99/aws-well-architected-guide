import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP04 — 컴퓨팅 환경 자동화 보안</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        골든 AMI, 강화된 컨테이너 기준 이미지, 보안 설정이 포함된 인프라 코드(IaC)를 사용하여
        컴퓨팅 환경의 보안 설정을 자동화합니다. 수동 설정 변경을 최소화하고, 모든 보안 기준선이
        코드로 관리되어 반복 가능하고 일관되게 적용됩니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        모든 컴퓨팅 인스턴스와 컨테이너는 승인된 골든 이미지에서 시작되고, 보안 기준선이 IaC를 통해
        일관되게 적용됩니다. 구성 드리프트가 자동으로 감지되고 수정되며, 새로운 보안 패치가 이미지
        빌드 파이프라인을 통해 자동으로 배포됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>운영 중인 인스턴스에 수동으로 보안 설정을 변경하여 구성 드리프트 발생</li>
        <li>골든 이미지 없이 기본 AMI를 사용하고 매번 수동으로 보안 설정을 적용함</li>
        <li>보안 기준선이 문서화되어 있지 않거나 코드로 관리되지 않음</li>
        <li>인스턴스를 오랫동안 실행하여 구성 드리프트가 누적되는 "눈송이 서버" 운영</li>
        <li>컨테이너 이미지를 root 사용자로 실행하거나 불필요한 권한을 부여함</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>보안 기준선이 일관되게 적용되어 구성 오류로 인한 취약점 감소</li>
        <li>이미지 교체(immutable infrastructure) 방식으로 장기 실행 인스턴스의 보안 위험 제거</li>
        <li>보안 패치를 파이프라인으로 자동 배포하여 패치 주기 단축</li>
        <li>IaC로 관리된 보안 설정을 코드 리뷰를 통해 감사 가능</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 Image Builder를 사용하여 CIS 벤치마크 또는 STIG 기준을 적용한 골든 AMI 빌드 파이프라인을 구성합니다.</li>
        <li>AWS Config 규칙을 정의하여 실행 중인 인스턴스가 보안 기준선에서 벗어났을 때 자동으로 탐지하고 알림을 발송합니다.</li>
        <li>AWS Systems Manager State Manager를 사용하여 인스턴스 설정 상태를 원하는 상태로 지속적으로 유지합니다.</li>
        <li>컨테이너 이미지는 non-root 사용자로 실행하고, 읽기 전용 파일 시스템을 사용하며, 최소 권한의 Linux capabilities만 부여합니다.</li>
        <li>인프라를 AWS CloudFormation 또는 Terraform으로 코드화하고, 보안 설정을 코드 리뷰 프로세스에 포함시킵니다.</li>
        <li>Amazon Inspector를 EC2 Image Builder 파이프라인에 통합하여 취약한 이미지가 배포되기 전에 차단합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>EC2 Image Builder — 보안 강화된 골든 AMI 자동 빌드</li>
        <li>AWS Config — 구성 드리프트 탐지 및 규정 준수 평가</li>
        <li>AWS Systems Manager State Manager — 인스턴스 상태 지속 관리</li>
        <li>Amazon Inspector — 이미지 빌드 단계 취약점 스캔</li>
        <li>AWS CloudFormation — 인프라 코드화 및 보안 설정 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
