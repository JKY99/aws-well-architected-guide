import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP01 — 필요한 데이터만 저장</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>데이터 수집, 저장, 처리를 비즈니스 요구사항에 맞게 제한합니다. 불필요한 데이터를 수집하고 저장하는 것은 스토리지 에너지 소비를 증가시키고, 데이터를 처리하는 데 더 많은 컴퓨팅 리소스를 필요로 합니다. 수집하는 데이터의 양과 보존 기간을 최소화하면 스토리지 인프라와 에너지 소비를 크게 줄일 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>비즈니스 가치를 제공하는 데이터만 수집하고 저장하며, 더 이상 필요하지 않은 데이터는 자동으로 삭제하여 스토리지 사용량과 관련 에너지 소비를 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>"나중에 필요할 수 있다"는 이유로 모든 데이터를 무기한 보존합니다.</li>
        <li>실제 사용되지 않는 상세 로그와 메트릭을 과도하게 수집합니다.</li>
        <li>데이터 보존 정책 없이 스토리지가 무한정 증가합니다.</li>
        <li>규정 준수 요구사항을 초과하는 데이터를 불필요하게 보관합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 사용량 감소로 에너지 소비와 비용이 동시에 절감됩니다.</li>
        <li>처리해야 할 데이터양이 줄어들어 컴퓨팅 리소스 요구사항이 감소합니다.</li>
        <li>데이터 거버넌스와 개인정보 보호 준수가 향상됩니다.</li>
        <li>백업 및 복구에 필요한 시간과 리소스가 절약됩니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 분류 체계를 수립하고 각 데이터 유형별 보존 기간을 정의합니다.</li>
        <li>Amazon S3 Lifecycle 정책을 설정하여 오래된 데이터를 자동으로 삭제합니다.</li>
        <li>CloudWatch Logs 보존 기간을 비즈니스 요구사항에 맞게 설정합니다.</li>
        <li>수집하는 메트릭과 로그의 세분성과 범위를 검토하여 불필요한 데이터를 줄입니다.</li>
        <li>데이터 최소화 원칙을 개발 프로세스와 데이터 설계에 통합합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle — 자동 데이터 만료 및 삭제 정책</li>
        <li>Amazon CloudWatch Logs — 로그 보존 기간 관리</li>
        <li>AWS Glue Data Catalog — 데이터 분류 및 메타데이터 관리</li>
        <li>Amazon Macie — 민감 데이터 식별 및 관리</li>
        <li>AWS Config — 데이터 보존 정책 준수 모니터링</li>
      </ul>
      <PageNav />
    </article>
  );
}
