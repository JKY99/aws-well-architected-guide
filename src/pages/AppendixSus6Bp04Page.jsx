import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP04 — 빌드 환경 활용도 증가</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        자동화와 코드로서의 인프라(IaC)를 사용하여 필요 시 빌드 환경을 시작하고 미사용 시 종료하여
        리소스 활용도를 높입니다. 상시 운영되는 빌드 환경은 실제 사용 시간에 비해 대부분의 시간을
        유휴 상태로 보내며 에너지를 낭비합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        빌드 환경이 실제 빌드 작업이 있을 때만 리소스를 사용하고 미사용 시 자동으로 종료됩니다.
        서버리스 기술과 온디맨드 인스턴스를 활용하여 CI/CD 인프라의 에너지 소비를 최소화합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>24시간 상시 운영되는 빌드 서버를 유지하며 대부분의 시간 유휴 상태로 두는 것</li>
        <li>빌드에 필요한 것보다 많은 데이터를 처리하는 것</li>
        <li>과도하게 프로비저닝된 빌드 인스턴스를 사용하는 경우</li>
        <li>코드로서의 인프라 없이 빌드 환경을 수동으로 관리하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>빌드 인프라의 유휴 에너지 소비 제거로 탄소 발자국 감소</li>
        <li>온디맨드 빌드 환경으로 전환하여 빌드 인프라 비용 절감</li>
        <li>서버리스 기술 활용으로 인프라 관리 부담 감소</li>
        <li>필요한 만큼만 사용하는 효율적인 CI/CD 파이프라인 운영</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>코드로서의 인프라(IaC)를 사용하여 빌드 환경 생성 및 종료를 자동화합니다.</li>
        <li>서버리스 기술을 활용하여 빌드 작업이 있을 때만 리소스를 사용합니다.</li>
        <li>On-Demand 인스턴스를 사용하여 빌드 요청 시에만 환경을 시작합니다.</li>
        <li>Amazon EC2 스팟 인스턴스를 활용하여 비용 효율적인 빌드 환경을 구성합니다.</li>
        <li>AWS Systems Manager Session Manager를 사용하여 빌드 환경에 안전하게 접근합니다.</li>
        <li>빌드에 필요한 데이터 볼륨을 제한하여 불필요한 데이터 처리를 줄입니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS CodeBuild — 완전 관리형 온디맨드 빌드 서비스</li>
        <li>AWS CloudFormation — 빌드 환경 인프라 코드화 및 자동화</li>
        <li>AWS CDK — 코드로서의 인프라 개발 키트</li>
        <li>Amazon EC2 스팟 인스턴스 — 비용 효율적인 빌드 인스턴스</li>
        <li>AWS Systems Manager Session Manager — 안전한 빌드 환경 접근</li>
      </ul>

      <PageNav />
    </article>
  );
}
