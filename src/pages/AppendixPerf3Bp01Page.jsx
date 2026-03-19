import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixPerf3Bp01Page() {
  return (
    <article className="doc-content">
      <h1>PERF03-BP01 — 스토리지 특성 파악</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>워크로드의 스토리지 요구사항(블록, 파일, 객체, 아카이브)을 파악하고 각 스토리지 유형의 특성과 성능 특징을 이해합니다.</p>
      <h2>원하는 결과</h2>
      <p>워크로드 특성에 맞는 최적의 스토리지 유형을 선택하여 성능과 비용 효율성을 동시에 달성합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 데이터에 동일한 스토리지 유형 사용</li>
        <li>스토리지 특성 및 제한 사항 미파악</li>
        <li>I/O 패턴 분석 없이 스토리지 선택</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드 특성에 맞는 성능 최적화</li>
        <li>불필요한 고성능 스토리지 프로비저닝 방지로 비용 절감</li>
        <li>스토리지 유형별 특성 활용으로 확장성 향상</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터 액세스 패턴(랜덤/순차, 읽기/쓰기 비율) 분석</li>
        <li>Amazon S3(객체), Amazon EBS(블록), Amazon EFS(파일), Amazon S3 Glacier(아카이브) 특성 비교</li>
        <li>I/O 요구사항(IOPS, 처리량, 지연 시간)을 기반으로 스토리지 유형 선택</li>
        <li>데이터 수명 주기 및 보존 요구사항 고려</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3</li>
        <li>Amazon EBS</li>
        <li>Amazon EFS</li>
        <li>Amazon S3 Glacier</li>
        <li>AWS Storage Gateway</li>
      </ul>
      <PageNav />
    </article>
  );
}
